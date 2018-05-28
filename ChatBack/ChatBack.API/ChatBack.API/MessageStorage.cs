using System.Collections.Generic;
using ChatBack.API.Models;

namespace ChatBack.API
{
    public class MessageStorage
    {
        public static MessageStorage AllMessages { get; } = new MessageStorage();
        public List<Message> Messages { get; set; }

        public MessageStorage()
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
