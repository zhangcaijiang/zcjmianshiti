import React from 'react';
import { Checkbox } from 'antd';

const plainOptions = ['1','2','3']

function Page() {
    const [value, setValue] = React.useState(['1']);
    const pictures = [
        {
          id: '1',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
      ];
    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />

    
}
 function PictureSelect (props) {
    let { value, onChange, pictures } = props
 return(
    <div >
        <Checkbox onClick={(e)=>{
            onChange(e.target.checked ? plainOptions : []);
        }}>全选</Checkbox>
        <div  >
            {pictures.map((item,index)=>{
            return(
                <span key={item.id}>
                    <Checkbox checked={value.indexOf(item.id)>-1} onClick={(e)=>{
                        if (e.target.checked) {
                            let newValue = [...value,item.id]
                            onChange([...new Set(newValue)]);                          
                        }else {
                            let newValue = value.filter(x=>x!==item.id)
                            onChange(newValue);  
                        }
                    }}></Checkbox>
                    <img src={item.url}></img>
                </span>
            )
            })}
        </div>
    </div>
 )
}
export {Page,PictureSelect}