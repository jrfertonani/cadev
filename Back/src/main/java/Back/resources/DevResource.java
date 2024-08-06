package Back.resources;

import Back.domain.DTO.devDTO;
import Back.domain.Dev;
import Back.services.DevService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/dev")
public class DevResource {

    @Autowired
    private ModelMapper mapper;
    
    @Autowired
    private DevService service;

    @PostMapping
    public ResponseEntity<devDTO> create(@RequestBody devDTO DTO) {
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(service.create(DTO).getId())
                .toUri();
        return ResponseEntity.created(uri).body(DTO);
    }



    @GetMapping
    public ResponseEntity<List<Dev>> getAll() {
        return ResponseEntity.ok().body(
                service.getAll()
                        .stream().map(x -> mapper.map(x, Dev.class))
                        .toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<devDTO> findById(@PathVariable Integer id){
        return ResponseEntity.ok().body(
                mapper.map(
                        service.findById(id), devDTO.class)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<devDTO> update(@PathVariable Integer id,
                                         @RequestBody devDTO DTO){
        Dev obj = service.update(id, DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
