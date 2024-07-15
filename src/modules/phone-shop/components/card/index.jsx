import { Text } from "../../../../components/text";
import css from "./index.module.css"

export function Card({ name, price, image, id, onChangePhoneDetail,onAddSanPham }) {
  return (
    <>
      <div className={css.card}>
        <div className={css["card-img"]}>
          <img src={image} />
        </div>

        <div className={css["card-content"]}>
          <Text as={"h2"}>{name}</Text>

          <Text as="p">{price}$</Text>

          <div className={css["card-footer"]}>
            <button
              onClick={onChangePhoneDetail}
              className="btn btn-dark"
            >
              Xem chi tiết
            </button>

            <button onClick={onAddSanPham} className="btn btn-dark">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
