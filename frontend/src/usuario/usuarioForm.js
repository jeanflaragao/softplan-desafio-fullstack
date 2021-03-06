import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InputHorizontal from "../common/form/InputHorizontal";
import IconButton from "../common/layout/IconButton";
import { reduxForm, Field } from "redux-form";

import { init } from "./usuarioActions";

class UsuarioForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="box box-info">
          <div role="form" className="form-horizontal">
            <div className="box-body">
              <Field
                readOnly={readOnly}
                name="nome"
                component={InputHorizontal}
                label="Nome"
                placeholder="Informe o nome"
                required
              />

              <Field
                readOnly={readOnly}
                name="login"
                component={InputHorizontal}
                label="Login"
                placeholder="Informe o nome"
                required
              />

              <Field
                readOnly={readOnly}
                name="senha"
                component={InputHorizontal}
                label="Senha"
                type="password"
                placeholder="Informe a senha"
              />

              <div className="form-group">
                <label htmlFor="tipoUsuario" className="col-sm-2 control-label">
                  Situação
                </label>
                <div className="col-sm-10">
                  <Field name="tipoUsuario" component="select">
                    <option value="">Selecione</option>
                    <option value="ADMINISTRADOR">Administrador</option>
                    <option value="TRIADOR">Triador</option>
                    <option value="FINALIZADOR">Finalizador</option>
                  </Field>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="pull-right">
                <IconButton
                  stylebutton="primary"
                  label={this.props.submitLabel}
                  type="submit"
                  onClick={this.props.create}
                />
                <IconButton
                  stylebutton="default"
                  label="Cancelar"
                  onClick={this.props.init}
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

UsuarioForm = reduxForm({ form: "usuarioForm", destroyOnUnmount: false })(
  UsuarioForm
);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(UsuarioForm);
