using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ChatBack.API.Models;
using Microsoft.AspNetCore.Cors;
using ChatBack.API.Infrastructure;

namespace ChatBack.API.Controllers
{
    [Route("api/Messages")]
    [EnableCors("AllowSpecificOrigin")]
    public class MessageController : Controller
    {
        private readonly MessageStorage messageStorage;
        private readonly IDateTimeProvider dateTimeProvider;

        public MessageController(MessageStorage messageStorage, IDateTimeProvider dateTimeProvider)
        {
            this.messageStorage = messageStorage;
            this.dateTimeProvider = dateTimeProvider;
        }

        [HttpGet]
        public IActionResult GetMessages()
        {
            return Ok(messageStorage);
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public IActionResult GetMessage(int id)
        {
            var messageToReturn = messageStorage.Messages.FirstOrDefault(m => m.Id == id);
            if (messageToReturn == null)
            {
                return NotFound();
            }
            return Ok(messageToReturn);
        }

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public IActionResult PostNewMessage([FromBody] MessageForCreation Message)
        {
            if (Message == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var MaxMessageId = 0;
            if (messageStorage.Messages.Count != 0)
            {
                MaxMessageId = messageStorage.Messages.Max(m => m.Id);
            }

            var FinalMessage = new Message()
            {
                Id = ++MaxMessageId,
                Content = Message.Content,
                //Date = heure.ToString("D2") + ":" + minute.ToString("D2"),
                Date = dateTimeProvider.Now,
                UserName = Message.UserName,
                AvatarSrc = Message.AvatarSrc
            };
            messageStorage.Messages.Add(FinalMessage);

            return CreatedAtRoute("GetMessage", new { id = FinalMessage.Id }, FinalMessage);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(int id)
        {
            var Message = messageStorage.Messages.FirstOrDefault(m => m.Id == id);
            if (Message == null)
            {
                return NotFound();
            }
            messageStorage.Messages.Remove(Message);

            return NoContent();
        }
    }
}
