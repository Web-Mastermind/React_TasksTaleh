import Card from "./Component/Card";
import "./style.css";

const data = [
  {
    id: 1,
    imgsrc: "./img1.png",
    title: "Kiçik Qruplar",
    desc: "Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur"
  },
  {
    id: 2,
    imgsrc: "./img2.png",
    title: "Təcrübəli Təlimçilər",
    desc: "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız"
  },
  {
    id: 3,
    imgsrc: "./img3.png",
    title: "Nəzəriyyə + Praktika",
    desc: "Hər gün tədris + hər gün praktiki məşğələ metodu ilə seçdiyiniz sahəsi sürətlə öynəcəksiniz"
  },
  {
    id: 4,
    imgsrc: "./img4.png",
    title: "Təcrübə proqramı və Karyera dəstəyi",
    desc: "Kursu bitirdikdən sonra tələbələrimizi təcrübə proqramı ilə təmin edirik və iş həyatına tez başlamaları üçün əməkdaşlıq etdiyimiz şirkətlərə yönəldirik"
  },
  {
    id: 5,
    imgsrc: "./img5.png",
    title: "Ödənişsiz Sınaq Dərsləri",
    desc: "Sınaq dərslərimizdə heç bir ödəniş etmədən iştirak edib, tədrisimizin keyfiyyətini dəyərləndirə bilərsiniz"
  },
  {
    id: 6,
    imgsrc: "./img6.png",
    title: "Əyani və Online dərslər",
    desc: "Dərimizdə istər əyani, həm online formatda iştirak edə bilərsiniz"
  },
  {
    id: 7,
    imgsrc: "./img7.png",
    title: "Dərslərin Video Yazıları",
    desc: "Hər dərsdən sonra həmin dərsin video yazılarını əldə edəcəksiniz və istədiyiniz zaman həmin yazılara təkrar baxaraq, unutduğunuz mövzuları təkrarlaya biləcəksiniz"
  },
  {
    id: 8,
    imgsrc: "./img8.png",
    title: "Zəmanət Veririk",
    desc: "Tədrisimizə tam zəmanət veririk: əgər hər hansı mövzu və ya mövzular sizə tam aydın olmasa, həmin dərsləri sizə təkrar keçəcəyik"
  },
]
const App = ()=> {
  return (
    <div className="container">
      <div className="cards" >
      {
        data.map(({imgsrc, title, desc})=> {
          return <Card imgsrc={imgsrc} title={title} desc={desc} />
        })
      }
       {/* <Card 
       imgsrc="./img1.png" 
       title="Lorem" 
       desc="Lorem2"/> 
       <Card
       imgsrc="./img2.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img3.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img4.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img5.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img6.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img7.png" 
       title="Lorem" 
       desc="Lorem2"
       /> 
       <Card
       imgsrc="./img8.png" 
       title="Lorem" 
       desc="Lorem2"
       />  */}
    </div>
    </div>
  )
}

export default App;