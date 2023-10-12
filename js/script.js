/*Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл.*/

const arr = [20, 45, 3, 8];

let getItem = function(item, i) {
  if (i === arr.length) { //условие при котором действие функции остановится
    return;
  }
  console.log(arr[i]); //выводим в консоль i-ый элемент
  getItem(item, i + 1); //запускаем функцию для след элемента
}

getItem(arr, 0);


/*Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
группы студента и выводящую введённые данные в следующем виде:
***************************** 
* Домашняя работа: «Функции»  * 
* Выполнил: студент гр. W4017 * 
* Иванов Иван Иванович        * 
***************************** 
Размер рамки должен определятся автоматически по самой длинной строке. 
Рамку вывести в консоль.*/

const getRequest = () => {
    const firstName = prompt('Введите имя');
    const lastName = prompt('Введите фамилию');
    const patronymic = prompt('Введите отчество');
    const groupNumber = prompt('Введите номер группы');

    let strHomework = 'Домашняя работа: "Функции"';
    let strСompleted = `Выполнил: студент гр. ${groupNumber}`;
    let strName = `${lastName} ${firstName} ${patronymic}`;

    let frameLength = 0
    if(strHomework.length > strСompleted.length && strHomework.length > strName.length){
        frameLength = strHomework.length;
    } else if (strСompleted.length > strHomework.length && strСompleted.length > strName.length){
        frameLength = strСompleted.length;
    } else {
        frameLength = strName.length;
    }

    for(i = 1; i <= 5; i++){
        let star = '';
        let space = '';
        let strResult = '';
        if(i === 1){

            for(let j = 0; j < frameLength; j++){
                star += '*';              
            } 
            strResult = `*${star}*`
            console.log(strResult)
            star = '' 

        } else if (i === 2) {

            for(let j = 0; j < (frameLength - strHomework.length); j++){
                space += ' ';                
            } 
            strResult = '*'+strHomework+space+'*'
            console.log(strResult)
            space = '' 

        } else if (i === 3) {

            for(let j = 0; j < (frameLength - strСompleted.length); j++){
                space += ' ';                
            }             
            strResult = '*'+strСompleted+space+'*'
            console.log(strResult)
            space = ''

        } else if (i === 4) {

            for(let j = 0; j < (frameLength - strName.length); j++){
                space += ' ';                
            } 
            strResult = '*'+strName+space+'*'
            console.log(strResult)
            space = ''

        }else {

            for(let j = 0; j < frameLength; j++){
                star += '*';              
            } 
            strResult = `*${star}*`
            console.log(strResult)
            star = '' 
        }
    }
}

getRequest()

