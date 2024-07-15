import { Fragment, useEffect, useState } from "react";
import { Card } from "./components/card";
import { XemChiTiet } from "./components/xem-chi-tiet";
import { GioHang } from "./components/gio-hang";
import { transformSanPham } from "./utils";
import { mockData } from "./_mock-data_";


export function PhoneShop() {
  console.log("🚀 >>>::::::::: phoneshop :::::::::");
  const [listSanPham, setListSanPham] = useState([]);

  const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

  useEffect(() => {
    console.log("🚀 >>>::::::::: 1111 :::::::::", listSanPham);
    return () => {
      console.log("🚀 >>>::::::::: un-mounting :::::::::", listSanPham);
    };
  }, []);

  const onChangePhoneDetail = (phone) => {
    setPhoneDetail(phone);
  };

  const onAddSanPham = (sanPham) => {
    sanPham = transformSanPham(sanPham);
    const newList = [...listSanPham];
    const item = newList.find((i) => i.id === sanPham.id);
    if (item) {
      item.amount += 1;
    }
    else {
      newList.push(sanPham);
    }

    setListSanPham(newList);
  };

  const onDelete = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này hay không?")) {
      const newListSanPham = listSanPham.filter((i) => i.id !== id);

      setListSanPham(newListSanPham);
    }
  };

  const onTang = (id) => {
    const sanPham = listSanPham.find((i) => i.id === id);
    if (sanPham) {
      sanPham.amount += 1;
    }

    setListSanPham([...listSanPham]);
  };

  const onGiam = (id) => {
    const sanPham = listSanPham.find((i) => i.id === id);

    if (sanPham) {
      if (sanPham.amount === 1) {
        onDelete(id);

        return;
      }

      sanPham.amount -= 1;
    }

    setListSanPham([...listSanPham]);
  };

  return (
    <>
      <div className="container">
        <GioHang
          onTang={onTang}
          onGiam={onGiam}
          listSanPham={listSanPham}
          onDelete={onDelete}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
        }}
      >
        {mockData.map((item) => {
          return (
            <Fragment key={item.maSP}>
              <Card
                name={item.tenSP}
                price={item.giaBan}
                image={item.hinhAnh}
                onChangePhoneDetail={() => onChangePhoneDetail(item)}
                onAddSanPham={() => {
                  onAddSanPham(item);
                }}
              />
            </Fragment>
          );
        })}
      </div>

      <div>
        <XemChiTiet
          name={phoneDetail.tenSP}
          img={phoneDetail.hinhAnh}
          manHinh={phoneDetail.manHinh}
          cameraSau={phoneDetail.cameraSau}
          cameraTruoc={phoneDetail.cameraTruoc}
          heDieuHanh={phoneDetail.heDieuHanh}
          ram={phoneDetail.ram}
          rom={phoneDetail.rom}
        />
      </div>
    </>
  );
}
