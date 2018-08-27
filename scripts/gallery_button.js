const gallery = document.querySelectorAll('.photo'); //Выбрали все картинки

//Показывает картинки определённых групп
function showGroup(groups){
    Array.prototype.forEach.call(gallery, 
        function(photo){ //Принимает на вход картинку и показывает или нет в зависимсти от группы
            const photoGroups = photo.getAttribute('data-group').split(' '),
            isPhotoInGroups = groups.some(function(group){
                return photoGroups.includes(group);
            });

            if(isPhotoInGroups){
                photo.classList.remove('photoHidden');
            }

            else{
                photo.classList.add('photoHidden');
            }
    })
}

//Вешаем действия на кнопки

const portfolioButtons = document.querySelectorAll('.portfolio__btn__photo');

Array.prototype.forEach.call(portfolioButtons, 
    function(btn){
        btn.addEventListener('click', toolbarBtnClick);
    });

    function toolbarBtnClick(e){
        const btn = e.target,
            btnGroups = btn.getAttribute('data-group').split(' ');

        showGroup(btnGroups);
    }