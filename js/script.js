function typing() {
  var typingBool = false;
  var typingIdx = 0;
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  var del = -1;
  var repeatInt = null;
  var tyInt = null;

  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

  typingTxt = typingTxt.split("");
  if (typingBool == false) {
    typingBool = true;
    tyInt = setInterval(typing, 150);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      $(".typing").append(typingTxt[typingIdx]);

      typingIdx++;
      if (typingIdx == typingTxt.length) {
        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 150);
        }, 1000);
      }
    } else {
      if (-typingTxt.length - 1 < del) {
        $(".typing").html(typingTxt.slice(0, del));
        del--;
      } else {
        if (liIndex >= liLength - 1) {
          liIndex = 0;
        } else {
          liIndex++;
        }

        typingIdx = 0;
        del = -1;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        clearInterval(tyInt);
        setTimeout(function () {
          tyInt = setInterval(typing, 150);
        }, 500);
      }
    }
  }
}

function clickHamburger() {
  if ($(".menu").css("display") == "none") {
    $(".menu").show();
  } else {
    $(".menu").hide();
  }
}

function clickBtn1() {
  if ($("#item1").css("height") == "0px") {
    $("#item1").css({ height: "200px" });
    $("#btn1").removeClass("fa-chevron-down");
    $("#btn1").addClass("fa-chevron-up");
  } else {
    $("#item1").css({ height: "0px" });
    $("#btn1").removeClass("fa-chevron-up");
    $("#btn1").addClass("fa-chevron-down");
  }
}

function clickBtn2() {
  if ($("#item2").css("height") == "0px") {
    $("#item2").css({ height: "200px" });
    $("#btn2").removeClass("fa-chevron-down");
    $("#btn2").addClass("fa-chevron-up");
  } else {
    $("#item2").css({ height: "0px" });
    $("#btn2").removeClass("fa-chevron-up");
    $("#btn2").addClass("fa-chevron-down");
  }
}

typing();
