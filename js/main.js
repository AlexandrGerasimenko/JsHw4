// Обязательная часть ( 3 балла )
// Создайте объект, свойства которого описывают содержимое дамской сумочки

// Создайте метод объекта, позволяющий удалить что-то из сумочки

// Создайте метод объекта, позволяющий положить что-то в сумочку

var womanBag = {
    mirror : 'green', 
    phone : 'white',
    pencil : 'black',
    removeThing:function  (thing) {
        for (var  thingInBag in womanBag) {
            if (  thing == thingInBag){
                delete womanBag[thingInBag];
            
            }
        }
    },
    addInBag : function(thing,color){
    womanBag[thing] = color;
    }
};

womanBag.removeThing('phone');
console.log(womanBag);
womanBag.addInBag('pen','blue');
console.log(womanBag);


// Дополнительно ( 4 балла )
// Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

// 📦 Приватные свойства объекта:
//     🔑 title ( название книги ),
//     🔑 year ( год издания ),
//     🔑 author ( автор ),
//     🔑 readerName ( кому выдана ),
//     🔑 readerData ( когда выдана )

// 📦 Приватный метод 🔑 giveTheBook ( client ):
//         внесение изменений в свойства:
//             🔑 readerName ( client )
//             🔑 readerData ( текущая дата )

// 📋 Публичные методы:
//     📋 getBookInfo () - посмотреть информацию о наличии книги 
//        ( вывести в консоль readerData )
//     📋 getTheBook ( client ) -  получить книгу:
//        проверка, что книга не выдана на руки 
//        ( приватное свойство readerName 
//          должно быть пустой строкой )
//        если выдана - вернуть null
//        если не выдана, то вызвать приватный метод 
//        giveTheBook ( client ) и вернуть bookTitle
//     📋 returnBook () - вернуть книгу:
//        сбросить значения приватных свойств
//        readerName, readerData
// Создайте экземпляр книги
// Запросите экземпляр от имени ... ( любое имя )

var LibraryBook = function ( bookTitle = "Без названия", bookYear = "нет данных" , BookAuthor = "нет данных"){
    var title  = bookTitle || "Без названия" ;
    var author = BookAuthor || "нет данных";
    var readerName = null;
    var readerData = null;
    var year = bookYear || "нет данных";
        function giveTheBook ( client, data = new Date() ) {
            readerName = client
            readerData = data;
            console.log(client);
    }
    this.getBookInfo = function () {
            var text = readerName ? "выдана на руки" : "есть в наличии";
            console.log(readerName)
            console.info ( `${author}, ${title} (${year}): ${text}` )
    }
    this.getTheBook = function ( client, data ) {
            if ( readerName ) {
                    this.getBookInfo ()
                    return null
            } else {
                    giveTheBook ( client, data )
                    return {
                            title: title,
                            year: year,
                            author: author
                    }
            }
    }
    this.returnBook = function () {
            readerName = null
            readerData = null
    }
}

var books = []
books [0] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books [1] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )
books [3] = new LibraryBook ( "Кобзарь", "2005", "Тарас Шевченко" )

console.log ( books )

books [0].getBookInfo()
books [0].getTheBook( "Иван Сидоренко", new Date ( 2018, 6, 25 ) )
books [0].getBookInfo()
books [0].returnBook()
books [0].getBookInfo()
books [1].getBookInfo()

console.log ( books );


// Объявите конструктор, который создает экземпляры с унаследованным методом addProperty

// Метод addProperty должен принимать два аргумента:

// имя свойства
// значение свойства
// и добавлять экземпляру новое свойство с указанным именем и значением

var Const = function Const(name, prop) {
    this.addProperty = function(name, prop) {
      this[name] = `${prop}`;
      console.log(this.name, 1);
    };
    console.log(this, 1);
  }
  
  var a = new Const
  a.addProperty('color', 'red');
  console.log(a);
  a.addProperty('car', 'bmw');
  console.log(a);