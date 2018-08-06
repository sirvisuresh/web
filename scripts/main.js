var images = [{
    src: "images/third.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  }, {
    src: "images/fourth.png",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  },
  {
    src: "images/seventh.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  }, {
    src: "images/first.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  },
  {
    src: "images/second.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  }, {
    src: "images/eight.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  },
  {
    src: "images/nine.jpg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  }, {
    src: "images/fifth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  },
 {
    src: "images/sixth.jpeg",alt: "Photo",name:"local", info:"fetched from local machine", update:"06/08/2018"
  }

 ];

function validateEmail(){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        emailField=document.forms["contact_form"]["email"];
        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;
    }


  function showpage()
     {  document.getElementById('gallery_form').style.display = "block";
        document.getElementById('buttons').style.display = "none";
      }
  function pagehide()
    {
      document.getElementById('gallery_form').style.display = "none";
      document.getElementById('buttons').style.display = "block";
     }
     function showpage1()
     {  document.getElementById('gallery_form1').style.display = "block";
        document.getElementById('buttons').style.display = "none";
      }
  function pagehide1()
    {
      document.getElementById('gallery_form1').style.display = "none";
      document.getElementById('buttons').style.display = "block";
     }
     function showpage2()
     {  document.getElementById('gallery_form2').style.display = "block";
        document.getElementById('buttons').style.display = "none";
      }
  function pagehide2()
    {
      document.getElementById('gallery_form2').style.display = "none";
      document.getElementById('buttons').style.display = "block";
     }


function urlvalidation(){
var url = document.getElementById("url").value;
alert(url);
var reg = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
if (reg.test(url) == false) 
        {
            alert('Invalid URL');
            return false;
        }

        return true;
}

function add_image() {

 var URL = document.getElementById("url").value;
 var Name = document.getElementById("name").value;
 var Info = document.getElementById("info").value;
 var date = document.getElementById("date").value;
      if(localStorage.getItem('pictures')!=null)
      {
        var images = JSON.parse(localStorage.getItem('pictures'));
      }
       images.push({ src : URL, alt : "Photo", name : Name, info : Info, update : date });
       localStorage.setItem('pictures',JSON.stringify(images));
       alert("Image added to Gallery successfully");
      // document.getElementById("form_id").submit();
} 
function loadimage(photo){
  var l = photo.length;
    for(var i = 0; i < l; i++)
    { 
      var div = document.createElement('div');
      div.className = "column";
      var img = document.createElement('img');
       img.src = photo[i].src;
       img.alt = photo[i].alt;
       div.appendChild(img);


      var row = document.getElementById('roow');
      if (row != null) {
        row.appendChild(div);
      }
          
    }

}

 window.onload = function() {
    //var image = JSON.parse(images);
    if(localStorage.getItem("pictures")==null)
    {
       loadimage(images);
    }
    else
    {
      var pictures = JSON.parse(localStorage.getItem("pictures"));
      loadimage(pictures);
    }
}