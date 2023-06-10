const nav = {
    init:function(){

    const navElt = document.querySelector('.nav');
    navElt.addEventListener("mouseover", nav.handleMouseOver);
    navElt.addEventListener("mouseout", nav.handleMouseOut);
},

handleMouseOver: function (event) {

    event.target.style.color= "red";

},

handleMouseout: function (event) {

    event.target.style.color = 'silver';
},

};

document.addEventListener("DOMcintentLoaded", nav.init);