import Card from "./Component/Card";
import "./style.css";

const data = [
  {
    id: 1,
    title: "Portfolio hazırlanması",
    desc: "Kurs və Təcrübə proqramı ərzində hazırlayacağınız layihələri Portfolionuza və CV-nizə yerləşdirə biləcəksiniz"
  },
  {
    id: 2,
    title: "CV məsləhətləri və yönləndirmə",
    desc: "CV hazırlanması üzrə məsləhət veririk və hazır CV-nizi partnyor şirkətlərə təcrübə və iş üçün yönəldirik"
  },
  {
    id: 3,
    title: "İntervyu məsləhətləri",
    desc: "Sizə iş təklif edən şirkət ilə intervyu üçün hazırıayacayıq: özünüzü intervyuda necə aparmalısınız, suallara necə cavab verməlisiniz və digər məsləhətlər"
  },
  {
    id: 4,
    title: "İş üçün yönləndirmə",
    desc: "Kursu bitirdikdən sonra dərhal işə başlamaq çox önəmlidir. Bu məsələdə də biz sizə yardımçı olacağıq: iş imkanı üçün sizi əməkdaşlıq etdiyimiz şirkətlərə yönəldəcəyik"
  },
  {
    id: 5,
    title: "Təcrübə proqramı",
    desc: "Siz kursumuzun məzunu olduqdan sonra sizi təcrübə proqramı ilə təmin edəcəyik və ya təcrübə üçün partnyor şirkətlərə yönəldəcəyik"
  },
  {
    id: 6,
    title: "Texniki dəstək",
    desc: "Kurslarımızı bitirdikdən sonra belə biz 6 ay ərzində sizin yanınızda olacayıq. Əgər siz işə düzəldiyiniz şirkətdə hər hansı texniki çətinliklə üzləşsəniz, təlimçilərimiz sizə dəstək göstərəcəklər"
  },
]
const App = ()=> {
  return (
    <div className="container">
      <div className="cards" >
      {
        data.map(({title, desc})=> {
          return <Card title={title} desc={desc} />
        })
      }
      </div>
    </div>
  )
}

export default App;