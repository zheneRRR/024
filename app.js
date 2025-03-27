//ниже подключаем объекты - consnt этот селектор работает как css. в строковом фомате ввод слайдов
// теперь пишем функцию
function slidesPlugin(activeSlide = 0){
const slides = document.querySelectorAll('.slide')
//задаем способ обхода элементов массива в JS for где на каждой итерации будем создавать слайд. Берем его из массива slides: of slides
//теперь задаем массив  -  делаем плагин, перенеся все в нее
 
slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () =>{
        clearActiveClasses()        //очистка активных классов - чтобы окна не двоили (не были открытыми)
       slide.classList.add('active') 
    })
}
function clearActiveClasses() {     //() после Classes  - указывают на элементы
    slides.forEach((slide) =>{slide.classList.remove('active')}
    )}
}
slidesPlugin(4) //Если не указывать, то сам листает. Если указать 4 в () то будет 4 слайд. !! Отсчет массива с 0,1,2,3,4
