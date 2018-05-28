using System;
using Xunit;
using ChatBack.API;
using ChatBack.API.Controllers;
using ChatBack.API.Models;
using System.Linq;
using ChatBack.API.Infrastructure;

namespace ChatBack.Test
{
    public class Test
    {
        private MessageStorage messageStorage;
        private TestDateTimeProvider testDateTimeProvider;
        private MessageController controller;

        public Test()
        {
            messageStorage = new MessageStorage();
            testDateTimeProvider = new TestDateTimeProvider(new DateTime(2000, 1, 1));
            controller = new MessageController(messageStorage, testDateTimeProvider);
        }

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

            var id = messageStorage.Messages.Max(m => m.Id);

            var LastMessage = messageStorage.Messages.FirstOrDefault(m => m.Id == id);

            Assert.Equal(LastMessage.AvatarSrc, Message.AvatarSrc);
            Assert.Equal(LastMessage.Content, Message.Content);
            Assert.Equal(LastMessage.UserName, Message.UserName);
            Assert.Equal(LastMessage.Date, testDateTimeProvider.targetDateTime);
        }

        class TestDateTimeProvider : IDateTimeProvider
        {
            public readonly DateTime targetDateTime;

            public TestDateTimeProvider(DateTime targetDateTime)
            {
                this.targetDateTime = targetDateTime;
            }

            public DateTime Now => targetDateTime;
        }
    }
}
