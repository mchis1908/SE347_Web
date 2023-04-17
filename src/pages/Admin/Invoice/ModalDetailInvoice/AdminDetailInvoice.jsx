import React from 'react'
import './AdminDetailInvoice.css'

function AdminDetailInvoice(props) {
  const products = [
    {
      id: '1',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '2',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '3',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '4',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '5',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '6',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '7',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '8',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
    {
      id: '9',
      label:'Quần jean',
      cost:'100.000',
      img:'http://surl.li/ggptd',
    },
  ]
  return (
    <div className="AdminDetailInvoice">
      <div className="AdminDetailInvoice_modal">
        <div className="AdminDetailInvoice_modal-header">
          <h3>{props.title}</h3>
          <button onClick={props.onClose}>X</button>
        </div>
        {/* <div className="AdminDetailInvoice_modal-body">
          {props.children}
          <div className='AdminDetailInvoice_modal-body-inf_label'>
            <p className='Label_PropInvoice'>Tên sản phẩm</p>
            <p className='Label_PropInvoice'>Loại sản phẩm</p>
            <p className='Label_PropInvoice'>Giá sản phẩm</p>
          </div>
          <div className='AdminDetailInvoice_modal-body-inf_input'>
            <input className='Input_PropInvoice' type='text' placeholder='Nhập tên sản phẩm'></input>
            <input className='Input_PropInvoice' type='text' placeholder='Chọn loại sản phẩm'></input>
            <input className='Input_PropInvoice' type='text' placeholder='Nhập giá sản phẩm'></input>
          </div>
          <div className='AdminDetailInvoice_modal-body-inf_image'>
            <img src="http://surl.li/ggptd" alt="description of image" style={{width: '13vw', height: '20vh'}}/>
            <button className='AdminDetailInvoice_modal_Btn_AddImg'>Thêm hình ảnh +</button>
          </div>
        </div> */}
        <div className="AdminDetailInvoice_Bottom">
            <div className='AdminDetailInvoice_Detail'>
              <div className='AdminDetailInvoice_Detail_Content_Date'>
                <p className='AdminDetailInvoice_Detail_Content_LabelDay'>Ngày lập hóa đơn: </p>
                <p className='AdminDetailInvoice_Detail_Content_Calendar'>01/01/2023</p>
              </div>
              <div className='AdminDetailInvoice_CustomerInf'>
                  <p className='AdminDetailInvoice_CustomerInf_Label'>Khách hàng:</p>
                  <input className='AdminDetailInvoice_CustomerInf_Input' placeholder='Nhập số điện thoại khách hàng' value='Huỳnh Minh Chí'></input>
              </div>
              <p className='ProductInf_Label'>Sản phẩm:</p>
              <div className='AdminDetailInvoice_ProductList'>
                {
                  products.map(products => {
                        return (
                          <div className='AdminDetailInvoice_ProductInf'>
                            <td></td>                    
                            <td>{products.id}</td>
                            <td>{products.label}</td>
                            <td><img style={{width:'50px', height:'40px'}} src={products.img}/></td>
                            <td>{products.cost}</td>
                          </div>
                        )
                    })
                }
              </div>
              <div className='AdminDetailInvoice_ProductInf'>
                <td style={{fontWeight:'500'}}>Tổng:</td>                    
                <td>{products.length}</td>                    
                <td></td>
                <td></td>
                <td>2.000.000</td>
              </div>     
            </div> 
          {/* -------------------------------------------------------------- */}
        </div>
        <div className='AdminDetailInvoice_modal_Btn_Change'>
            <button className='AdminDetailInvoice_modal_Btn_Change_Cancel' onClick={props.onClose}>Hủy bỏ</button>
            <button className='AdminDetailInvoice_modal_Btn_Change_Confirm'>In barcode sản phẩm</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDetailInvoice