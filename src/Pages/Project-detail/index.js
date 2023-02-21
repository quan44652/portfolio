import style from "./Detail.module.css";
import Header from "../../Layout/Header";

function ProjectDetail() {
  return /*html */ `
  ${Header()}
  <div class = "${style.wrapper}">
       <div class = "${style.description}">
            <div class = "${style.images}">
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" /> 
                <div class = "${style.images_small}">
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" />
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" />
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" />
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" />
                <img src = "https://res.cloudinary.com/dl3q8klyg/image/upload/v1676892781/portfolio/qpn1ueq2a2vso2gl6azk.webp" />
                </div>
            </div>
            <div class = "${style.content}">
            <table>
            <tr>
              <td>Tên dự án</td>
              <td>Bloom books</td>
            </tr>
            <tr>
            <td>Thời gian hoàn thành</td>
            <td>Bloom books</td>
          </tr>
          <tr>
          <td>Thành viên</td>
          <td>Bloom books</td>
        </tr>
        <tr>
        <td>Công ty phát hành</td>
        <td>Bloom books</td>
      </tr>
           
          </table>
            </div>
       </div>
       <div>
       <h1>Mô tả dự án</h1>
       <p></p>
       </div>
    </div>
    `;
}

export default ProjectDetail;
