package br.com.softplan.jean.usuario.controller;

import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.jean.login.controller.LoginApiController;
import br.com.softplan.jean.usuario.entity.Usuario;
import br.com.softplan.jean.usuario.entity.UsuarioDTO;
import br.com.softplan.jean.usuario.service.UsuarioService;

@RestController
public class UsuarioApiController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("usuarios")
	public Set<UsuarioDTO> listarUsuarios(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token) {
		UsuarioDTO usuario = usuarioService.trazerPorToken(token);
		if(usuario.isAdmin()) {
			return usuarioService.listar();
		}
		return null;
	}
	
	@GetMapping("usuarios/{usuarioId}/")
	public UsuarioDTO trazerUsuario(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token,  @PathVariable Long usuarioId) {
		UsuarioDTO usuario = usuarioService.trazerPorToken(token);
		if(usuario.isAdmin()) {
			return usuarioService.trazer(usuarioId);
		}
		return null;
	}

	@PostMapping("usuarios")
	public Usuario criarUsuario(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token, @Valid @RequestBody Usuario usuario) {
		UsuarioDTO usuariotoken = usuarioService.trazerPorToken(token);
		if(usuariotoken.isAdmin()) {
			return usuarioService.criar(usuario);
		}
		return null;
	}

	@PutMapping("usuarios/{usuarioId}")
	public Usuario alterarUsuario(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token, @PathVariable Long usuarioId, @Valid @RequestBody Usuario usuarioRequest) {
		UsuarioDTO usuario = usuarioService.trazerPorToken(token);
		if(usuario.isAdmin()) {
			return usuarioService.alterar(usuarioId, usuarioRequest);
		}
		return null;
	}

	@DeleteMapping("/usuarios/{usuarioId}")
	public void deletarUsuario(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token, @PathVariable Long usuarioId) {
		UsuarioDTO usuario = usuarioService.trazerPorToken(token);
		if(usuario.isAdmin()) {
			usuarioService.deletar(usuarioId);
		}
	}
	
	@GetMapping("usuarios/finalizadores/")
	public Set<UsuarioDTO> listarUsuariosPorTipo(@RequestHeader(LoginApiController.NOME_TOKEN_HEADER) String token) {
		UsuarioDTO usuario = usuarioService.trazerPorToken(token);
		if(usuario.isAdmin() || usuario.isTriador()) {
			return usuarioService.listarFinalizadores();
		}
		return null;
	}

}
