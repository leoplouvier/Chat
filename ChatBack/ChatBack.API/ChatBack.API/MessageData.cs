using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatBack.API.Models;

namespace ChatBack.API
{
    public class MessageData
    {
        public static MessageData AllMessages { get; } = new MessageData();
        public List<Message> Messages { get; set; }

        public MessageData()
        {
            Messages = new List<Message>()
            {
                new Message()
                {
                    Id=1,
                    Date="16:37",
                    Content="Salut",
                    UserName="Léo",
                    AvatarSrc="https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg"
                }
            };


        }   
    
    }
}
