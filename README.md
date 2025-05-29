### 1. Thuộc tính của thẻ (attribute)

---

Attribute là những từ đặc biệt được sử dụng trong thẻ mở của một phần tử HTML để sửa đổi hành vi hoặc hiển thị của phần tử đó. Chúng cung cấp thông tin bổ sung về phần tử và bao gồm tên và giá trị, được phân tách bằng dấu bằng.

Ví du:
`<img src="logo.png" alt="Logo" width="100" height="50">`

Trong đó bao gồm:

- Thuộc tính bắt buộc (required): `src` - định nghĩa đường dẫn ảnh
- Không bắt buộc (optional): `alt` - định nghĩa chú thích cho ảnh; `width` - `height` định nghĩa chiều rộng - chiều dài của ảnh

### 2. Cách trỏ đường dẫn thư mục

---

`../` Trỏ đến thư mục hiện tại – nơi chứa file cùng cấp.  
`./` Trỏ đến một cấp thư mục phía trên (cha của thư mục hiện tại). Có thể sử dụng nhiều lần để đi lên nhiều cấp.  
`/` Trỏ đến thư mục gốc của hệ thống

```
website/
├── index.html <-- Chúng ta đang ở đây
├── assets/
│   └── images/
│       └── logo.png <-- Cần truy cập đến hình ảnh này
├── css/
│   └── style.css
```

```CSS
background-image: url("./assets/images/logo.png");
```

### 3. Class và ID

---

Dùng `id` khi bạn chỉ cần định danh một phần tử duy nhất  
Mỗi giá trị `id` phải là duy nhất trong một trang HTML (không được trùng)
Tham chiếu bằng dấu # trong CSS hoặc JavaScript.

```HTML
<div id="menu">Nội dung menu</div>
```

```CSS
#menu {
  font-size: 30px;
}
```

Dùng `class` để gán một hoặc nhiều lớp (nhóm) cho phần tử. Cho phép nhiều phần tử chia sẻ cùng một kiểu CSS hoặc event JavaScript.

```HTML
<p class="highlight">Đây là một đoạn văn nổi bật.</p>
<button class="highlight">Đây là một button nổi bật</button>
```

```CSS
#highlight {
  color: red;
}
```

### 4. Thuộc tính CSS cho text

---

### 4.1. Thuộc tính kích thước, khoảng cách

| Thuộc tính                       | Giá trị ví dụ                            | Đơn vị / kiểu giá trị   | Chú thích                                                    |
| -------------------------------- | ---------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| **width**                        | 100px                                    | px, em, rem, %          | Chiều rộng của phần tử                                       |
| **height**                       | 100px                                    | px, em, rem, %          | Chiều cao của phần tử                                        |
| **max-width**                    | 200px                                    | px, em, rem, %          | Chiều rộng tối đa                                            |
| **min-width**                    | 50px                                     | px, em, rem, %          | Chiều rộng tối thiểu                                         |
| **max-height**                   | 200px                                    | px, em, rem, %          | Chiều cao tối đa                                             |
| **min-height**                   | 50px                                     | px, em, rem, %          | Chiều cao tối thiểu                                          |
| **margin**                       | 50px<br>20px 10px<br>10px 20px 30px 40px | px, em, rem, %          | Khoảng cách bên ngoài phần tử                                |
| **margin-right/left/top/right**  | 20px                                     | px, em, rem, %          | Khoảng cách bên ngoài phần tử theo một hướng                 |
| **padding**                      | 50px<br>20px auto<br>10px 20px 30px 40px | px, em, rem, %          | Khoảng cách bên trong (từ viền đến nội dung)                 |
| **padding-right/left/top/right** | 20px                                     | px, em, rem, %          | Khoảng cách bên trong phần tử theo một hướng                 |
| **box-sizing**                   | border-box                               | content-box, border-box | Cách tính tổng kích thước (có tính padding/border hay không) |

### 4.2. Thuộc tính chữ

| Thuộc tính          | Giá trị ví dụ             | Đơn vị / kiểu giá trị                   | Chú thích                                  |
| ------------------- | ------------------------- | --------------------------------------- | ------------------------------------------ |
| **font-size**       | 30px                      | px, em, rem, %                          | Cỡ chữ                                     |
| **font-family**     | 'Seaweed Script', cursive |                                         | Phông chữ                                  |
| **font-weight**     | 700, bold                 | 100–900, normal, bold                   | Độ đậm của chữ                             |
| **font-style**      | italic                    | normal, italic, oblique                 | Kiểu chữ nghiêng                           |
| **text-align**      | center                    | left, right, center, justify            | Căn chỉnh dòng chữ                         |
| **text-decoration** | underline                 | none, underline, line-through, overline | Gạch chân, gạch ngang, gạch giữa           |
| **text-transform**  | uppercase                 | none, uppercase, lowercase, capitalize  | Biến đổi kiểu chữ                          |
| **line-height**     | 1.5                       | số, px, %                               | Khoảng cách giữa các dòng                  |
| **letter-spacing**  | 2px                       | px, em                                  | Khoảng cách giữa các ký tự                 |
| **word-spacing**    | 5px                       | px, em                                  | Khoảng cách giữa các từ                    |
| **white-space**     | nowrap                    | normal, nowrap, pre, break-spaces,..    | Xử lý xuống dòng và khoảng trắng           |
| **text-indent**     | 30px                      | px, em                                  | Thụt đầu dòng                              |
| **direction**       | rtl                       | ltr, rtl                                | Hướng viết (trái sang phải hoặc ngược lại) |
| **writing-mode**    | vertical-rl               | horizontal-tb, vertical-rl,...          | Hướng dòng chữ                             |
| **text-shadow**     | 2px 2px 4px #000          |                                         | Bóng của chữ                               |
| **overflow**        | hidden                    | auto, hidden, scroll,...                | Ẩn phần chữ bị tràn ra ngoài khung         |
| **text-overflow**   | ellipsis                  | clip, ellipsis,...                      | Cách hiển thị khi chữ tràn ra ngoải khối   |

### 4.3. Thuộc tính trang trí

| Thuộc tính                | Giá trị ví dụ                | Đơn vị / kiểu giá trị               | Chú thích                                |
| ------------------------- | ---------------------------- | ----------------------------------- | ---------------------------------------- |
| **color**                 | #ffffff                      | color text, hexa, rgb, hsl          | Màu chữ                                  |
| **background-color**      | #f0f0f0                      | color text, hexa, rgb, hsl          | Màu nền                                  |
| **background-image**      | url("image.jpg")             | url(path)                           | Sử dụng hình ảnh làm nền                 |
| **background-size**       | 200px                        | size, contain, cover                | Kích thước ảnh nền                       |
| **background-repeat**     | no-repeat                    | repeat, no-repeat,...               | Kiểu lặp lại ảnh nền                     |
| **background-position**   | center center                | center, center(x) center(y),...     | Vị trí ảnh nền                           |
| **background-attachment** | fixed                        | scroll, fixed, local                | Nền cuộn hay cố định                     |
| **border**                | 1px solid #000               | kích thước - kiểu - màu             | Viền (dạng tổng quát)                    |
| **border-width**          | 2px                          | px, em                              | Độ dày viền                              |
| **border-style**          | solid                        | solid, dashed, dotted               | Kiểu đường viền                          |
| **border-color**          | #ffffff                      | color text, hexa, rgb, hsl          | Màu đường viền                           |
| **border-radius**         | 50%                          | px, %                               | Bo góc                                   |
| **outline**               | 2px dotted red               | kích thước - kiểu - màu             | Đường viền ngoài (không chiếm diện tích) |
| **box-shadow**            | 2px 2px 10px rgba(0,0,0,0.3) |                                     | Đổ bóng hộp                              |
| **opacity**               | 0.8                          | từ 0 đến 1                          | Độ trong suốt                            |
| **cursor**                | pointer                      | none, pointer, default, not-allowed | Giao diện con trỏ chuột khi hover        |

### 4.4. Display

Thuộc tính display cho phép xác định cách hiển thị của các phần tử HTML theo một cách khác so với cách hiển thị mặc định của chúng.

`display: block` Thiết lập cho một phần tử chiếm diện tích của một hàng (full width), có thể set margin (top left right bottom) và width, height.  
 `display: inline` Thiết lập cho một phần tử chiếm diện tích đủ để chứa phần tử đó, từ đó nhiều phần tử có thể nằm chung một hàng. Không thể set width height, margin top bottom.  
 `display: inline-block` Kết hợp đặc tính của block và inline.  
 `display: none` Ẩn phần tử (kể cả kích thước của nó)

#### Display: flex

Flexbox (Flexible Box Layout) là một dạng hiển thị giúp bạn dễ dàng canh chỉnh các phần tử con theo hàng ngang hoặc dọc và tự động co giãn theo kích thước màn hình.  
Tuy nhiên, flex không được hỗ trợ ở các phiên bản trình duyệt cũ.  
Tham khảo: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Tổng quan về cấu trúc của Flexbox:  
<img src="https://itviec.com/blog/wp-content/uploads/2024/05/flex-css-vippro.png" alt="flex-direction" width="400"/>

### Thuộc tính cho phần tử cha (flex container)

`flex-direction`: Hướng sắp xếp phần tử con

- **row** (mặc định): từ trái sang phải trong ltr; từ phải sang trái trong rtl
- **column**: giống như hàng nhưng từ trên xuống dưới
- **row-reverse**: ngược chiều với row
- **column-reverse**: ngược chiều với column

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg" alt="flex-direction" width="400"/>

`flex-wrap`: Hướng sắp xếp phần tử con

- **nowrap**: tất cả các phần tử con sẽ nằm trên một dòng
- **wrap**: các phần tử con có thể nằm nhiều dòng, từ trên xuống dưới nếu hàng đó không đủ kích thước để chứa.
- **wrap-reverse**: ngược chiều với wrap

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg" alt="flex-wrap" width="400"/>

`justify-content`: Căn chỉnh phần tử con trên trục dọc (ngược lại sẽ là trục ngang khi direction: column)

- **flex-start**: phân bổ toàn bộ phần tử về phía bên đầu
- **flex-end**: phân bổ toàn bộ phần tử về phía đuôi
- **center**: phân bổ toàn bộ phần tử vào chính giữa
- **space-between**: phân bổ đều trên một dòng, 2 phần tử bên ngoài sẽ nằm đầu và cuối
- **space-around**: phân bổ đều trên một dòng và khoảng cách giữa các phần tử đều bằng nhau, có khoảng cách ở đầu và cuối
- **space-evenly**: phân bổ sao cho khoảng cách giữa bất kỳ hai phân tử nào (và khoảng cách đến các cạnh) bằng nhau.

<img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" alt="justify-content" width="400"/>

`align-items`: Căn chỉnh phần tử con trên trục ngang (ngược lại sẽ là trục dọc khi direction: column)

- **stretch**: kéo giãn kích thước của phần tử con để lấp đầy vùng chứa (vẫn đảm bảo min-width/max-width)
- **flex-start**: căn chỉnh toàn bộ phần tử về phía trên
- **flex-end**: căn chỉnh toàn bộ phần tử về phía dưới
- **center**: căn chỉnh phần tử về chính giữa (đều ở 2 phía trên và dưới)
- **baseline**: căn chỉnh toàn bộ phần tử theo đường cơ sở

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" alt="align-itemst" width="400"/>

`align-content`: Căn chỉnh phần tử con dọc theo trục chéo

- **stretch**: Các dòng được kéo giãn để lấp đầy chiều cao khả dụng của flex container trên trục chéo
- **flex-start**: căn chỉnh toàn bộ phần tử về phía trên bên phải
- **flex-end**: căn chỉnh toàn bộ phần tử về phía dưới bên phải
- **center**: căn chỉnh phần tử về chính giữa trung tâm
- **space-between**: tương tự `justify-content: space-between` nhưng theo trục dọc
- **space-around**: tương tự `justify-content: space-around` nhưng theo trục dọc

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg" alt="align-items" width="400"/>

### Thuộc tính cho phần tử con (flex items)

`order`: vị trí sắp xếp của phần tử trong flex container

<img src="https://css-tricks.com/wp-content/uploads/2018/10/order.svg" alt="order" width="400"/>

`flex-grow`: xác định phần tử sẽ chiếm bao nhiêu phần trong flex container

Nếu tất cả các phần tử con đều có `flex-grow` là 1, không gian còn lại trong vùng chứa sẽ được phân phối đều cho tất cả.  
Nếu một trong các phần tử con có giá trị là 2, phần tử đó sẽ chiếm gấp đôi không gian so với bất kỳ phần tử con nào khác.

<img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg" alt="order" width="400"/>

`flex-shrink`: giảm kích thước của flex item nếu không đủ chỗ trong flex container.

`align-self`: cho phép ghi đè giá trị của align-items cho một flex item cụ thể, cách hoạt động của nó tương tự như thuộc tính align-item.

<img src="https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg" alt="order" width="400"/>

### 4.5. Position & transform

| Thuộc tính                     | Giá trị ví dụ                 | Chú thích                                                                |
| ------------------------------ | ----------------------------- | ------------------------------------------------------------------------ |
| **position**                   | static                        | Vị trí mới của một element tương quan/liên hệ tới vị trí mặc định của nó |
|                                | relative                      | Định vị tương đối so với vị trí ban đầu                                  |
|                                | absolute                      | Định vị tuyệt đối so với phần tử cha gần nhất có position khác static    |
|                                | fixed                         | Cố định trên màn hình (kể cả khi cuộn trang)                             |
|                                | sticky                        | Dính vào 1 vị trí khi cuộn tới điểm đó                                   |
| **top**                        | 10px                          | Khoảng cách từ trên xuống                                                |
| **right**                      | 20px                          | Khoảng cách từ bên phải                                                  |
| **bottom**                     | 10px                          | Khoảng cách từ dưới lên                                                  |
| **left**                       | 15px                          | Khoảng cách từ bên trái                                                  |
| **transform**                  | translateX(50px, 10px)        | Di chuyển theo trục X, Y                                                 |
|                                | translateX(50px)              | Di chuyển theo trục X                                                    |
|                                | translateY(-20px)             | Di chuyển theo trục Y                                                    |
|                                | scale(1.2)                    | Phóng to hoặc thu nhỏ                                                    |
|                                | rotate(45deg)                 | Xoay phần tử                                                             |
|                                | skew(20deg, 10deg)            | Nghiêng phần tử                                                          |
|                                | matrix(...)                   | Kết hợp nhiều phép biến đổi (ít dùng)                                    |
| **transform-origin**           | center, top left, 50% 50%     | Tâm xoay/phóng của transform                                             |
| **transition**                 | all 0.3s ease                 | Gộp nhiều thuộc tính transition                                          |
| **transition-property**        | background-color, padding,... | Thuộc tính áp dụng chuyển động                                           |
| **transition-duration**        | 0.5s, 200ms                   | Thời gian thực hiện hiệu ứng                                             |
| **transition-timing-function** | ease, linear, ease-in-out     | Kiểu tốc độ chuyển đổi                                                   |
| **transition-delay**           | 0.2s                          | Trì hoãn bắt đầu hiệu ứng                                                |

**Căn giữa item sử dụng position**

```html
<div class="container">
  <div class="centered">Centered item</div>
</div>
```

```css
.container {
  position: relative;
  width: 400px;
  height: 300px;
  background: #f0f0f0;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightblue;
  padding: 10px;
}
```

**Pseudo-elements `::before` và `::after`**

`::before`: Chèn nội dung trước nội dung thực của phần tử.  
`::after`: Chèn nội dung sau nội dung thực của phần tử.

Pseudo-elements dùng để chèn nội dung hoặc trang trí phần tử mà không cần thêm HTML. Không thể dùng cho những thẻ không có phần tử con như input.
Pseudo-elements có thể dùng những thuộc tính CSS như các thẻ khác, thường dùng để làm khối trang trí cho phần tử cha.

| Thuộc tính                   | Ví dụ                  | Chú thích                               |
| ---------------------------- | ---------------------- | --------------------------------------- |
| **content**                  | "★", "\E0B3\00FE0E"    | **Bắt buộc** để hiển thị pseudo-element |
| **position**                 | absolute, relative,... | Kiểu Định vị vị trí                     |
| **top, left, right, bottom** | 10px                   | Kiểu Định vị vị trí                     |
| **z-index**                  | 1, -1                  | Lớp hiển thị trước/sau                  |

### 4.6. Form

`form` là thẻ dùng để tạo biểu mẫu nhập liệu.

```html
<form action="/submit" method="post">
  <!-- inputs -->
</form>
```

Trong đó:

- `<form>...</form>`: Thẻ khai báo một form.
- `action`: Thuộc tính khai báo đường dẫn xử lý dữ liệu sau khi người dùng submit form.
- `method`: Thuộc tính khai báo phương thức xử lý dữ liệu bao gồm POST và GET.

**Các thẻ thường dùng trong form**  
| Thẻ HTML | Công dụng | Ví dụ hiển thị |
| ------------ | -------------------------------------- | --------------------------------------- |
| `<input>` | Nhập dữ liệu dạng ngắn | `<input type="text">` |
| `<textarea>` | Nhập dữ liệu dạng dài (nội dung lớn) | `<textarea></textarea>` |
| `<select>` | Menu nhiều lựa chọn | `<select><option>...</option></select>` |
| `<label>` | Nhãn cho input (gắn liền với input) | `<label for="email">Email</label>` |
| `<button>` | Thực hiện hành động (GET, POST API) | `<button type="submit">Submit</button>` |
| `<fieldset>` | Nhóm các input con trong khung viền | `<fieldset>...</fieldset>` |
| `<legend>` | Tiêu đề khung viền cho nhóm `fieldset` | `<legend>Thông tin</legend>` |

**Các input type thường dùng**
| `type` | Mô tả | Ví dụ hiển thị |
| ---------- | ---------------------------------- | ----------------------------------- |
| `text` | Nhập chữ ngắn | `<input type="text">` |
| `password` | Nhập mật khẩu (ẩn ký tự) | `<input type="password">` |
| `email` | Nhập địa chỉ email | `<input type="email">` |
| `number` | Nhập số | `<input type="number">` |
| `checkbox` | Chọn nhiều lựa chọn | `<input type="checkbox">` |
| `radio` | Chọn 1 trong nhiều lựa chọn | `<input type="radio" name="x">` |
| `file` | Chọn tệp để tải lên | `<input type="file">` |
| `submit` | Nút gửi form | `<input type="submit" value="Gửi">` |
| `reset` | Đặt lại form về trạng thái ban đầu | `<input type="reset">` |

**Các thuộc tính quan trọng trong form**

| Thuộc tính    | Áp dụng cho         | Mô tả                                                        |
| ------------- | ------------------- | ------------------------------------------------------------ |
| `action`      | `<form>`            | Đường dẫn nơi gửi dữ liệu                                    |
| `method`      | `<form>`            | `GET` hoặc `POST`                                            |
| `name`        | `<input>`,...       | Tên của trường dữ liệu (server dùng tên này để nhận dữ liệu) |
| `value`       | `<input>`           | Giá trị của input                                            |
| `placeholder` | `<input>`           | Văn bản gợi ý                                                |
| `required`    | `<input>`,...       | Bắt buộc nhập mới cho submit                                 |
| `readonly`    | `<input>`           | Giá trị chỉ đọc (không chỉnh sửa được)                       |
| `disabled`    | `<input>`,...       | Vô hiệu hóa trường, không cho thao tác                       |
| `checked`     | `checkbox`, `radio` | Mặc định chọn                                                |
| `multiple`    | `file`, `select`    | Cho phép chọn nhiều                                          |

### 4.7. Table

`table` được dùng để hiển thị dữ liệu dạng bảng (gồm hàng và cột), dành cho hiển thị thông tin có cấu trúc như thời khóa biểu, bảng giá, kết quả thi,...  
Một số dạng table: https://www.figma.com/design/36BPYZeyUhErxomcPSTe1a/Tables-design-samples--Community-?node-id=0-1&p=f&t=TMiLs3zz2tOTVr0c-0

```html
<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nguyen Chau</td>
      <td>Quyen</td>
    </tr>
    <tr>
      <td>Hoang Van</td>
      <td>Thong</td>
    </tr>
  </tbody>
</table>
```

**Các thẻ trong **
| Thẻ | Ý nghĩa |
| --------- | ---------------------------------------------------------- |
| `<table>` | Khởi tạo bảng |
| `<thead>` | Phần đầu bảng (tiêu đề cột) |
| `<tbody>` | Phần thân bảng (chưa các dòng dữ liệu) |
| `<tfoot>` | Phần chân bảng (tổng kết, chú thích,...) |
| `<tr>` | Table Row – một hàng |
| `<th>` | Table Header Cell – ô tiêu đề (in đậm, canh giữa mặc định) |
| `<td>` | Table Data Cell – ô dữ liệu |

**Các thuộc CSS thường dùng cho table**

| Thuộc tính/Thuộc tính CSS | Ý nghĩa                                      | Ví dụ                                                   |
| ------------------------- | -------------------------------------------- | ------------------------------------------------------- |
| `border`                  | Viền bảng và ô                               | `border="1"` hoặc CSS: `border: 1px solid #000;`        |
| `colspan`                 | Hợp nhất nhiều phần tử của các cột gần nhau  | `<td colspan="2">`                                      |
| `rowspan`                 | Hợp nhất nhiều phần tử của các hàng gần nhau | `<td rowspan="2">`                                      |
| `text-align`              | Căn lề nội dung trong ô                      | `left`, `center`, `right`                               |
| `padding`                 | Khoảng cách bên trong ô                      | `padding: 8px;`                                         |
| `width`, `height`         | Đặt kích thước bảng hoặc ô                   | `width: 100%`                                           |
| `border-collapse`         | Kiểu viền của ô                              | `separate` (viền đôi - mặc định), `collapse` (viền đơn) |

**Freeze table column**

Reference: https://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-a-fixed-frozen-left-column-and-a-scrollable-b

**:nth-child() Pseudo-class**

```
:nth-child(index|odd|even|an + b) {
  background-color: red;
}
```

### 4.9. Responsive Web Design

Responsive Web Design (RWD) là phương pháp thiết kế giao diện tự động thích nghi với nhiều kích thước màn hình khác nhau, từ điện thoại, máy tính bảng đến máy tính để bàn với mục tiêu là trang web hiển thị đẹp và dễ sử dụng trên mọi thiết bị.

Có 2 phương pháp thiết kế responsive là Mobile First và Desktop First

**Mobile first**

```css
.container {
  flex-direction: column;
}

/* Khi màn hình >= 768px (tablet, desktop) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

**Desktop first**

```css
.container {
  flex-direction: row;
}

/* Khi màn hình <= 768px (mobile) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

**Mobile First vs Desktop First**

| Tiêu chí              | Mobile First                         | Desktop First                        |
| --------------------- | ------------------------------------ | ------------------------------------ |
| Điểm bắt đầu          | Viết CSS cho thiết bị mobile trước   | Viết CSS cho desktop trước           |
| Cách dùng media query | `min-width` (thiết bị >= kích thước) | `max-width` (thiết bị <= kích thước) |
