import React from 'react'

import If from '../common/operators/If'
import ContentHeader from '../components/ContentHeader'
import Content from '../components/Content'
import Row from '../common/layout/Row'
import IconButton from '../common/layout/IconButton'


export default props => {
    
  const renderRows = () => {
      const list = props.list || []
      return list.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.nome}</td>
            <td>
              <IconButton styleButton='edit' icon='edit'
                onClick={() => props.handlePrepareUpdate(usuario)}>
              </IconButton>
              <IconButton styleButton='danger' icon='trash-o'
                onClick={() => props.handleRemove(usuario)}>
              </IconButton>
            </td>
          </tr>
        ))
  }
    
    

  return (
    <If test={!props.edit}>
    <ContentHeader title="Usuário" subTitle="Lista"/>
    <Content >
      <Row>
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">
                <IconButton styleButton='primary' label='Incluir' onClick={props.handlePrepareInsert}/>
            </h3>
          </div>
          <div className="box-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Nome</th>
                  <th className='table-actions'>Ações</th>
                </tr>
                {renderRows()}
              </tbody>
            </table>
          </div>
        </div>
    </Row>
    </Content>
    </If>
    )
  }