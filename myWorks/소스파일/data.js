
    function SaveData() {
      id = new Array();
      password = new Array();
      count = 0;

      var tp1 = document.getElementById("ID").value;
      var tp2 = document.getElementById("PASSWORDS").value;

      id[count] = tp1;
      password[count] = tp2;


      var ttp1 = document.getElementById("ID").value;
      var ttp2 = document.getElementById("PASSWORDS").value;

      if(ttp1 == '' || ttp2 ==''){
        alert('비우지마라잉');
        document.write("");
        location.href='signup1.html';
      }
    }

    function See() {

        document.write("<table> <tr> <td>아이디</td> <td>: "+id[count]+"</td> </tr> <tr><td>비밀번호</td><td>: " + password[count] + " </td></tr></table> ");
        document.write("<br><br>");
        document.write("입력한게 이거 맞지? ㅎㅎ 정보 잘 가져갈게요~~~");
        document.write("<br>농담이고 진짜 회원가입창으로 갈게여~~")
        document.write("<br>다운받은 txt파일은 아디 비번 혹시 까먹으실까봐 ㅎㅎ")

        setTimeout(function() {location.href='signup2.html';},6000);
        // 시간 지연
        // location.href='signup_in.html';


    }

    function saveToFile_Chrome(fileName) {

      var txt = "<아이디> : " + document.getElementById("ID").value + "<비밀번호> : " + document.getElementById("PASSWORDS").value;
      var blob = new Blob([txt], { type: 'text/plain' });
      objURL = window.URL.createObjectURL(blob);

      // 이전에 생성된 메모리 해제
      if (window.__Xr_objURL_forCreatingFile__) {
          window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
      }
      window.__Xr_objURL_forCreatingFile__ = objURL;
      var a = document.createElement('a');
      a.download = fileName;
      a.href = objURL;
      a.click();
    }
