    function Yashka() {
        let wrapper = document.createElement('div');
        wrapper.classList.add("wrapperYashka");


        document.body.insertBefore(wrapper, document.body.lastChild);
        
        wrapper = document.querySelector('.wrapperYashka');
        
        setTimeout(function(){
 wrapper.classList.add("visibleYashka");
        }, 300);
        
    }
    let n = 0;
    setInterval(function(){
        n = 0;
    }, 1000);
    function clickerFooter(){
        n++;
        if (n > 4) Yashka();
    }