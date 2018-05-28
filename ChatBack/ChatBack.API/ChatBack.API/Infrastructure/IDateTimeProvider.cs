using System;

namespace ChatBack.API.Infrastructure
{
    public interface IDateTimeProvider
    {
        DateTime Now { get; }
    }
}
