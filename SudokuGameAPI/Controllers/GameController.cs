using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SudokuGameAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private readonly string[] InitGame = {
                "","2","6","","","","8","1","",
                "3","","","7","","8","","","6",
                "4","","","","5","","","","7" ,
                "","5","","1","","7","","9","",
                "","","3","9","","5","1","","",
                "","4","","3","","2","","5","",
                "1","","","","3","","","","2",
                "5","","","2","","4","","","9",
                "","3","8","","","","4","6",""
            };

        private readonly string[] Solution = {
                "7","2","6","4","9","3","8","1","5",
                "3","1","5","7","2","8","9","4","6",
                "4","8","9","6","5","1","2","3","7",
                "8","5","2","1","4","7","6","9","3",
                "6","7","3","9","8","5","1","2","4",
                "9","4","1","3","6","2","7","5","8",
                "1","9","4","8","3","6","5","7","2",
                "5","6","7","2","1","4","3","8","9",
                "2","3","8","5","7","9","4","6","1"
            };

        private readonly ILogger<GameController> _logger;

        public GameController(ILogger<GameController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string[] NewGame()
        {
            return InitGame;
        }

        [HttpPost]
        public bool MakeMove([FromBody] Move move)
        {
            if (Solution[BoxToIndexMapper.getIndex(move.boxId)] == move.numberTried.ToString())
                return true;
            else
                return false;
        }
    }
}

public class Move
{
    public string boxId { get; set; }
    public int numberTried { get; set; }
}

public static class BoxToIndexMapper
{
    public static int getIndex(string boxId)
    {
        if (boxId.Equals("box1_1"))
            return 0;
        else if (boxId.Equals("box1_2"))
            return 1;
        else if (boxId.Equals("box1_3"))
            return 2;
        else if (boxId.Equals("box1_4"))
            return 3;
        else if (boxId.Equals("box1_5"))
            return 4;
        else if (boxId.Equals("box1_6"))
            return 5;
        else if (boxId.Equals("box1_7"))
            return 6;
        else if (boxId.Equals("box1_8"))
            return 7;
        else if (boxId.Equals("box1_9"))
            return 8;
        else if (boxId.Equals("box2_1"))
            return 9;
        else if (boxId.Equals("box2_2"))
            return 10;
        else if (boxId.Equals("box2_3"))
            return 11;
        else if (boxId.Equals("box2_4"))
            return 12;
        else if (boxId.Equals("box2_5"))
            return 13;
        else if (boxId.Equals("box2_6"))
            return 14;
        else if (boxId.Equals("box2_7"))
            return 15;
        else if (boxId.Equals("box2_8"))
            return 16;
        else if (boxId.Equals("box2_9"))
            return 17;
        else if (boxId.Equals("box3_1"))
            return 18;
        else if (boxId.Equals("box3_2"))
            return 19;
        else if (boxId.Equals("box3_3"))
            return 20;
        else if (boxId.Equals("box3_4"))
            return 21;
        else if (boxId.Equals("box3_5"))
            return 22;
        else if (boxId.Equals("box3_6"))
            return 23;
        else if (boxId.Equals("box3_7"))
            return 24;
        else if (boxId.Equals("box3_8"))
            return 25;
        else if (boxId.Equals("box3_9"))
            return 26;
        else if (boxId.Equals("box4_1"))
            return 27;
        else if (boxId.Equals("box4_2"))
            return 28;
        else if (boxId.Equals("box4_3"))
            return 29;
        else if (boxId.Equals("box4_4"))
            return 30;
        else if (boxId.Equals("box4_5"))
            return 31;
        else if (boxId.Equals("box4_6"))
            return 32;
        else if (boxId.Equals("box4_7"))
            return 33;
        else if (boxId.Equals("box4_8"))
            return 34;
        else if (boxId.Equals("box4_9"))
            return 35;
        else if (boxId.Equals("box5_1"))
            return 36;
        else if (boxId.Equals("box5_2"))
            return 37;
        else if (boxId.Equals("box5_3"))
            return 38;
        else if (boxId.Equals("box5_4"))
            return 39;
        else if (boxId.Equals("box5_5"))
            return 40;
        else if (boxId.Equals("box5_6"))
            return 41;
        else if (boxId.Equals("box5_7"))
            return 42;
        else if (boxId.Equals("box5_8"))
            return 43;
        else if (boxId.Equals("box5_9"))
            return 44;
        else if (boxId.Equals("box6_1"))
            return 45;
        else if (boxId.Equals("box6_2"))
            return 46;
        else if (boxId.Equals("box6_3"))
            return 47;
        else if (boxId.Equals("box6_4"))
            return 48;
        else if (boxId.Equals("box6_5"))
            return 49;
        else if (boxId.Equals("box6_6"))
            return 50;
        else if (boxId.Equals("box6_7"))
            return 51;
        else if (boxId.Equals("box6_8"))
            return 52;
        else if (boxId.Equals("box6_9"))
            return 53;
        else if (boxId.Equals("box7_1"))
            return 54;
        else if (boxId.Equals("box7_2"))
            return 55;
        else if (boxId.Equals("box7_3"))
            return 56;
        else if (boxId.Equals("box7_4"))
            return 57;
        else if (boxId.Equals("box7_5"))
            return 58;
        else if (boxId.Equals("box7_6"))
            return 59;
        else if (boxId.Equals("box7_7"))
            return 60;
        else if (boxId.Equals("box7_8"))
            return 61;
        else if (boxId.Equals("box7_9"))
            return 62;
        else if (boxId.Equals("box8_1"))
            return 63;
        else if (boxId.Equals("box8_2"))
            return 64;
        else if (boxId.Equals("box8_3"))
            return 65;
        else if (boxId.Equals("box8_4"))
            return 66;
        else if (boxId.Equals("box8_5"))
            return 67;
        else if (boxId.Equals("box8_6"))
            return 68;
        else if (boxId.Equals("box8_7"))
            return 69;
        else if (boxId.Equals("box8_8"))
            return 70;
        else if (boxId.Equals("box8_9"))
            return 71;
        else if (boxId.Equals("box9_1"))
            return 72;            
        else if (boxId.Equals("box9_2"))
            return 73;            
        else if (boxId.Equals("box9_3"))
            return 74;            
        else if (boxId.Equals("box9_4"))
            return 75;            
        else if (boxId.Equals("box9_5"))
            return 76;            
        else if (boxId.Equals("box9_6"))
            return 77;            
        else if (boxId.Equals("box9_7"))
            return 78;            
        else if (boxId.Equals("box9_8"))
            return 79;            
        else if (boxId.Equals("box9_9"))
            return 80;
        else
        {
            throw new Exception();
        }
    }
}
