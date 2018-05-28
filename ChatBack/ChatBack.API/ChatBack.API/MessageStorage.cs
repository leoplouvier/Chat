using System;
using System.Collections.Generic;
using ChatBack.API.Models;

namespace ChatBack.API
{
    public class MessageStorage
    {
        public List<Message> Messages { get; set; }

        public MessageStorage()
        {
            var now = DateTime.Now;
            Messages = new List<Message>()
            {
                new Message()   
                {
                    Id = 1,
                    Date = new DateTime(now.Year, now.Month, now.Day, 16, 37, 00),
                    Content = "Salut",
                    UserName = "Léo",
                    AvatarSrc = "https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg"
                }
            };
        }
    }
}