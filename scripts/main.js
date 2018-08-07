var images = [ {
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
    function isFutureDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("-");

    idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    return (today - idate) < 0;
     }
    /* function validate_date(form)
     {
         var date = document.forms[form]["date"];
         if(isFutureDate(date))
          alert("enter correct date");
     }
     */
function submit_contact_form()
{  if(validateEmail())
   document.getElementById("contact_form").submit();
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
 var flag=false;
 var regex = /((ftp|http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 var nameregex = /^[a-zA-Z ]*$/;
   var error ="";
    if(regex.test(URL) == false)
     {
       error=error + "Enter correct URL\n";
       flag=true;
       }
    if(nameregex.test(Name) == false)
       {
        error = error + "Enter correct Name\n";
        flag=true;
       }
    if(isFutureDate(date))
     { 
     error=error + "Enter correct date,not a Future date\n";
     flag=true;
      }
     if(flag==true)
     {
      alert(error);
      return false;
     }
       var image=images;
       if(localStorage.getItem('pictures')!==null)
       {
          image = JSON.parse(localStorage.getItem('pictures'));
       }
       image.push({ src : URL, alt : "Photo", name : Name, info : Info, update : date });
       localStorage.setItem('pictures',JSON.stringify(image));
       alert("Image added to Gallery successfully");
       document.getElementById("form_id").submit();
      // document.getElementById("form_id").submit();
} 
function update_image()
{  var URL = document.getElementById("url1").value;
   var Newurl = document.getElementById("newurl").value;
   var Name = document.getElementById("name1").value;
   var Info = document.getElementById("info1").value;
   var date = document.getElementById("date1").value;
    var image = images;
    if(localStorage.getItem('pictures')!=null)
      {
        image = JSON.parse(localStorage.getItem('pictures'));
      }
   var index = image.findIndex(function(item, i){
    return item.src === URL;
   });
  image[index].src =Newurl;
  image[index].name=Name;
  image[index].info=Info;
  image[index].date=date;
  localStorage.setItem('pictures',JSON.stringify(image));
  alert("Image modified successfully");
  document.getElementById("form_id1").submit();
}

function remove_image()
{
  var URL = document.getElementById("url2").value;
  var image = images;
    if(localStorage.getItem('pictures')!=null)
      {
         image = JSON.parse(localStorage.getItem('pictures'));
      }
   var index = image.findIndex(function(item, i){
    return item.src === URL;
   });
  image.splice(index, 1);
  localStorage.setItem('pictures',JSON.stringify(image));
  alert("Image delete successfully");
  document.getElementById("form_id2").submit();
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