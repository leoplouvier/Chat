using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ChatBack.API.Models
{
    public class MessageForCreation
    {
        public string Content { get; set; }

        [Required]
        [MaxLength(30,ErrorMessage="The User Name specified is too long.")]
        public string UserName { get; set; }

        public string AvatarSrc { get; set; }
    }
}
