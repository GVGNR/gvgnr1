function showBoard(){
 let cBoard = document.querySelector('.board');
 let block;
 let flag = true;   

    for (let i=0; i<8; i++){
        for (let h=0; h<8; h++){
            if (h == 0) flag = !flag; 

            block = document.createElement('div');
            if (flag) block.className = 'block black';
            else block.className = 'block white';

            cBoard.appendChild(block);
            flag = !flag;
        }
    }
};
showBoard();