using System;
using Xunit;
using ChatBack.API;
using ChatBack.API.Controllers;
using ChatBack.API.Models;
using System.Linq;


namespace ChatBack.Test
{

    public class Test
    {
        MessageController controller = new MessageController();

        [Fact]
        public void VerifyMessageAfterPost()
        {           

            var Message = new MessageForCreation()
            {
                Content = "contentTest",
                UserName = "UserTest",
                AvatarSrc = "#"

            };
            controller.PostNewMessage(Message);

            var id = MessageStorage.AllMessages.Messages.Max(m => m.Id);

            var LastMessage = MessageStorage.AllMessages.Messages.FirstOrDefault(m => m.Id == id);

            int heure = DateTime.Now.Hour;
            int minute = DateTime.Now.Minute;

            String Date = heure.ToString("D2") + ":" + minute.ToString("D2");

            Assert.Equal(LastMessage.AvatarSrc,Message.AvatarSrc);
            Assert.Equal(LastMessage.Content, Message.Content);
            Assert.Equal(LastMessage.UserName, Message.UserName);
            Assert.Equal(LastMessage.Date, Date);
        }
    }
}
