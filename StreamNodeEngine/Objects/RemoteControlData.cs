﻿
namespace StreamNodeEngine.Objects
{
    public class RemoteControlData
    {
        public string type { get; set; }
        public object data { get; set; }

        public string status { get; set; } = "ok";
    }
}
