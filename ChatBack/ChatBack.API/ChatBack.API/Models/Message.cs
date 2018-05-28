using System;

namespace ChatBack.API.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public string UserName { get; set; }
        public string AvatarSrc { get; set; }
    }
}
