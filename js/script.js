let sortBtn = document.querySelector(".filter-menu").children;
let dataItem = document.querySelector(".filter-items").children;


for(i=0; i<sortBtn.length; i++){
    sortBtn[i].addEventListener("click", function(){
        for(j=0; j<sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }
        this.classList.add('current');

        let dataTarget = this.getAttribute('data-target');
        for(k=0; k<dataItem.length; k++){            
            dataItem[k].classList.remove('active');
            dataItem[k].classList.add('delete');
            if(dataItem[k].getAttribute('data-item')==dataTarget || dataTarget=="all"){
                dataItem[k].classList.remove('delete');
                dataItem[k].classList.add('active');            
            }
        }
    });
    
}

