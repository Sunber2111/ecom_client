import addressApi from "app/api/address";
import { messageError, messageSuccess } from "app/notification/message";
import { RootState } from "app/store";
import {
  deleteAddress,
  fetchAllAddress,
  insertNewAddress,
  setDefaultAddress,
} from "features/Account/accountSlice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Header, Modal } from "semantic-ui-react";
import "./Address.scss";
function Address() {
  const addresses = useSelector((state: RootState) => state.account.addresses);

  const [open, setOpen] = React.useState(false);
  const [contruy, setContruy] = useState("");
  const [fullName, setFullName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  const handleChangeContruy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContruy(value);
  };
  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
  };
  const handleChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStreet(value);
  };
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleChangeRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegion(value);
  };
  const handleChangeZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipCode(value);
  };
  const handleChangeNumberPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumberPhone(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      insertNewAddress({
        country: contruy,
        fullName: fullName,
        streetAddress: street,
        city: city,
        state: region,
        zipCode: parseInt(zipCode),
        phoneNumber: numberPhone,
        _id: "",
        user: "",
      })
    );

    setOpen(false);
  };

  const handleSetDefault = (id: string, index: number) => {
    addressApi
      .setDefault(id)
      .then(() => {
        messageSuccess("Thiết lập thành công");
        dispatch(setDefaultAddress(addresses[index]));
      })
      .catch(() => {
        messageError("Thiết lập thất bại", 2000);
      });
  };

  const handleDelete = (id: string, index: number) => {
    addressApi
      .delete(id)
      .then(() => {
        messageSuccess("Xóa thành công");
        dispatch(deleteAddress(index));
      })
      .catch(() => {
        messageError("Xóa thất bại", 2000);
      });
  };

  useEffect(() => {
    dispatch(fetchAllAddress());
  }, []);

  return (
    <Fragment>
      <div className="small-container mb-5">
        <h1>Địa Chỉ Giao Hàng</h1>
        <div className="row">
          <div className="col-2">
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <div className="a-box">
                  <div className="a-box-inner">
                    <i className="fa fa-plus"></i>
                    <h2>Thêm Địa Chỉ</h2>
                  </div>
                </div>
              }
            >
              <Modal.Header>Address</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Thêm Mới Địa Chỉ</Header>
                  <Form>
                    <Form.Field>
                      <label>Quốc gia/ Khu vực</label>
                      <input
                        placeholder="Việt nam"
                        value={contruy}
                        onChange={(e) => handleChangeContruy(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Họ và tên</label>
                      <input
                        placeholder="Nguyễn Văn A"
                        value={fullName}
                        onChange={(e) => handleChangeFullName(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Tên đường , tên địa chỉ nhà , số nhà</label>
                      <input
                        placeholder="14 Nguyễn Văn Bảo"
                        value={street}
                        onChange={(e) => handleChangeStreet(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Thành phố</label>
                      <input
                        placeholder="TP. Hồ Chí Minh"
                        value={city}
                        onChange={(e) => handleChangeCity(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Tỉnh/ Quận</label>
                      <input
                        placeholder="Quận Gò Vấp"
                        value={region}
                        onChange={(e) => handleChangeRegion(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>ZipCode</label>
                      <input
                        placeholder="63000000"
                        value={zipCode}
                        onChange={(e) => handleChangeZipCode(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Số điện thoại</label>
                      <input
                        placeholder="0123456789"
                        value={numberPhone}
                        onChange={(e) => handleChangeNumberPhone(e)}
                      />
                    </Form.Field>
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  content="Submit"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={(e) => handleSubmit(e)}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </div>
          <div className="col-2">
            <Card.Group>
              {addresses.map((address, index) => (
                <Card style={{ width: "70%" }}>
                  <Card.Content>
                    <Card.Header>{address.fullName}</Card.Header>
                    <Card.Description>
                      {address.streetAddress}
                      <br />
                      {address.city}, {address.state} {address.zipCode}
                      <br />
                      {address.country}
                      <br />
                      Phone number : {address.phoneNumber}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui three buttons">
                      <Button
                        basic
                        color="red"
                        onClick={(e) => handleDelete(address._id, index)}
                      >
                        Xóa
                      </Button>
                      <Button
                        basic
                        color="blue"
                        onClick={(e) => handleSetDefault(address._id, index)}
                      >
                        Lấy làm địa chỉ mặc định
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
