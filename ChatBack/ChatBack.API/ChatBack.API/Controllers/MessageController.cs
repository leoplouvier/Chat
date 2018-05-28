using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ChatBack.API.Models;
using Microsoft.AspNetCore.Cors;

namespace ChatBack.API.Controllers
{
    [Route("api/Messages")]
    [EnableCors("AllowSpecificOrigin")]
    public class MessageController : Controller
    {       
        [HttpGet]
        public IActionResult GetMessages()
        {
            return Ok(MessageStorage.AllMessages);
        }

        [HttpGet("{id}", Name ="GetMessage")]
        public IActionResult GetMessage(int id)
        {    
            var messageToReturn = MessageStorage.AllMessages.Messages.FirstOrDefault(m => m.Id == id);
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
            if(Message == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var MaxMessageId = 0;            
            if (MessageStorage.AllMessages.Messages.Count!=0)
            {
                MaxMessageId = MessageStorage.AllMessages.Messages.Max(m => m.Id);
            }

            int heure = DateTime.Now.Hour;
            int minute = DateTime.Now.Minute;

            var FinalMessage = new Message()
            {
                Id = ++MaxMessageId,
                Content = Message.Content,
                Date = heure.ToString("D2") + ":" + minute.ToString("D2"),
                UserName = Message.UserName,
                AvatarSrc = Message.AvatarSrc
            };
            MessageStorage.AllMessages.Messages.Add(FinalMessage);

            return CreatedAtRoute("GetMessage", new { id = FinalMessage.Id },FinalMessage);
        }
 
        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(int id)
        {
            var Message = MessageStorage.AllMessages.Messages.FirstOrDefault(m => m.Id==id);
            if(Message== null)
            {
                return NotFound();
            }
            MessageStorage.AllMessages.Messages.Remove(Message);

            return NoContent();
        }
    }
}
