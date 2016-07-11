/**
 * Created by itc_user on 6/15/2016.
 */



function confirmAge() {
    var age = document.getElementById("age").value;

    if (age < 18) {
        document.getElementById("showMessage").innerHTML = "Sorry, you can't do this test! Too young!";
    }
    else {
        document.getElementById("showMessage").innerHTML = "Let's do it and get drunk!";
    }
}

var printOut = function () {

    var sum = 0;
    var result = ["times", "alchool", "midnigth", "cold", "hot", "music", "day", "arrive", "freetime", "backy"];


        for (var i = 0; i < result.length; i++) {

            var allAns = document.getElementsByName(result[i]);
            for (var j = 0; j < allAns.length; j++) {

                if (allAns[j].checked) {
                    sum += parseInt(allAns[j].value)
                }
            }
        }


        // var times = document.getElementsByName("times");
        // for (var i = 0; i < times.length; i++) {
        //     if (times[i].checked) {
        //         sum += parseInt(times[i].value);
        //     }
        // }

        // var alchool = document.getElementsByName("alchool");
        // for (var i = 0; i < alchool.length; i++) {
        //     if (alchool[i].checked) {
        //         sum += parseInt(alchool[i].value);
        //     }
        // }
        //
        // var midnigth = document.getElementsByName("midnigth");
        // for (var i = 0; i < midnigth.length; i++) {
        //     if (midnigth[i].checked) {
        //         sum += parseInt(midnigth[i].value);
        //     }
        // }
        //
        // var cold = document.getElementsByName("cold");
        // for (var i = 0; i < cold.length; i++) {
        //     if (cold[i].checked) {
        //         sum += parseInt(cold[i].value);
        //     }
        // }
        //
        // var hot = document.getElementsByName("hot");
        // for (var i = 0; i < hot.length; i++) {
        //     if (hot[i].checked) {
        //         sum += parseInt(hot[i].value);
        //     }
        // }
        //
        // var music = document.getElementsByName("music");
        // for (var i = 0; i < music.length; i++) {
        //     if (music[i].checked) {
        //         sum += parseInt(music[i].value);
        //     }
        // }
        //
        // var day = document.getElementsByName("day");
        // for (var i = 0; i < day.length; i++) {
        //     if (day[i].checked) {
        //         sum += parseInt(day[i].value);
        //     }
        // }
        //
        // var arrive = document.getElementsByName("arrive");
        // for (var i = 0; i < arrive.length; i++) {
        //     if (arrive[i].checked) {
        //         sum += parseInt(arrive[i].value);
        //     }
        // }
        //
        // var freetime = document.getElementsByName("freetime");
        // for (var i = 0; i < freetime.length; i++) {
        //     if (freetime[i].checked) {
        //         sum += parseInt(freetime[i].value);
        //     }
        // }
        // var backy = document.getElementsByName("backy");
        // for (var i = 0; i < backy.length; i++) {
        //     if (backy[i].checked) {
        //         sum += parseInt(backy[i].value);
        //     }
        // }

        sum += parseInt(document.getElementById("myRange").value);


        if ((sum >= 1) && (sum <= 100)) {

            document.getElementById("showWhoYouAre").innerHTML = "you are TOMER";

        }
        else if ((sum > 100) && (sum <= 250)) {
            document.getElementById("showWhoYouAre").innerHTML = "you are GALI";
        }
        else if ((sum > 250) && (sum <= 300)) {
            document.getElementById("showWhoYouAre").innerHTML = "you are OMER";
        }

        else if (sum > 300) {
            document.getElementById("showWhoYouAre").innerHTML = "you are RON";
        }
    };


    function levelDrunk() {
        var x = document.getElementById("myRange").value;
        document.getElementById("demo").innerHTML = x;
    }

