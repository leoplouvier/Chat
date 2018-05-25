using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace ChatBack.API.Models
{
    public class Message
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public string Date { get; set; }

        public string UserName { get; set; }

        public string AvatarSrc { get; set; }

    }
}
