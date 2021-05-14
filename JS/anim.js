$(document).ready(function(){   
window.addEventListener('scroll', animOnScroll)
        let progressBar = document.querySelector('.progress-bar-start')
        function animOnScroll(){
            let progressBarHeight = progressBar.offsetHeight; //получаем высоту объекта
            let progressBarOffSet = offSet(progressBar).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            let progressBarStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            let progressBarItemPoint = window.innerHeight - progressBarHeight / progressBarStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (progressBarHeight > window.innerHeight){
                let progressBarItemPoint = window.innerHeight - window.innerHeight / progressBarStart
            }

            if ((pageYOffset > (progressBarOffSet - progressBarItemPoint)) && (pageYOffset < (progressBarOffSet + progressBarHeight))){
                        let progressNumber = $('.progress-done p');
                $(function(){
                        
                        let progress = document.querySelectorAll('.progress-done');


                        for (let elem of progress){
                            elem.style.width = elem.getAttribute('data-done') + '%';
                            elem.style.opacity = 1;
                        }


                        for (let elem of progressNumber){

                            function setValue(){
                                setInterval(function(){
                                    if (Number(elem.innerHTML) < Number(elem.getAttribute('data-done'))){
                                        let numb = Number(elem.innerHTML) + 1;
                                        elem.innerHTML = numb;
                                    }
                                }, 15)
                            }
                            setValue();
                        }

                })
                
            }
        }
    
        function offSet(el){
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
});