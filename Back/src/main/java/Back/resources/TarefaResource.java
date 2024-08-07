package Back.resources;

import Back.domain.DTO.tarefaDTO;
import Back.domain.Tarefa;
import Back.services.TarefaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/tarefas")
public class TarefaResource {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private TarefaService service;

    @PostMapping
    public ResponseEntity<tarefaDTO> create(@RequestBody tarefaDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(service.create(DTO).getId())
                .toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Tarefa>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(
                        x -> mapper.map(x, Tarefa.class))
                        .toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<tarefaDTO> findById(@PathVariable Integer id){
        return ResponseEntity.ok().body(
                mapper.map(
                        service.findById(id), tarefaDTO.class
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<tarefaDTO> update(@PathVariable Integer id,
                                            @RequestBody tarefaDTO DTO){
        Tarefa obj = service.update(id, DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<tarefaDTO> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
