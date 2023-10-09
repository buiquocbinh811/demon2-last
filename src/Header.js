import React, { useState } from 'react';
function Header() {
        return (
          <div>
            <div className="container">
              <i className="fas fa-search"></i>
              <input className="child" type="text" placeholder="Tìm kiếm việc làm" />
              <i className="fas fa-map-marker-alt"></i>
              <input className="child" type="text" placeholder="Địa điểm" />
            </div>
            <div className="login">
              <button alt="">Đăng nhập</button>
            </div>
            <div className="signup">
              <button alt="">Đăng ký</button>
              <div className="select">
                <button alt="">Đăng tuyển & tìm hồ sơ</button>
              </div>
            </div>
            <div>
              <div id="shark">
                <div className="chill">Việc làm</div>
                <div className="chill">Hồ sơ & CV</div>
                <div className="chill">Công ty</div>
                <div className="chill">Phát triển sự nghiệp</div>
                <div className="chill">Công cụ</div>
              </div>
            </div>
          </div>

          
        );
      }
      
      export default Header;













// import React, { useState } from 'react';

// function Header() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const mockData = [
//     'Bồi bàn',
//     'Nhân viên quán cà phê',
//     'Bác sĩ',
//     'IT',
//     'Nhân viên trông xe',
//     'Bán bánh',
//     'Tiếp viên hàng không'
//   ];
  
//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredResults = term.trim() === '' ? [] : mockData.filter(item =>
//       item.toLowerCase().includes(term.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

//   return (
//     <div>
//       <div className="container">
//         <i className="fas fa-search"></i>
//         <input
//           className="child"
//           type="text"
//           placeholder="Tìm kiếm việc làm"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <i className="fas fa-map-marker-alt"></i>
//         <input className="child" type="text" placeholder="Địa điểm" />
//         {/* Hiển thị công việc tương ứng dựa trên kết quả tìm kiếm */}
//         <div className="suggested-jobs">
//           {searchResults.map((result, index) => (
//             <div className="suggested-job" key={index}>
//               {result}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="login">
//         <button alt="">Đăng nhập</button>
//       </div>
//       <div className="signup">
//         <button alt="">Đăng ký</button>
//         <div className="select">
//           <button alt="">Đăng tuyển & tìm hồ sơ</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
