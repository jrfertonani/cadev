package Back.services;

import Back.domain.DTO.tarefaDTO;
import Back.domain.Tarefa;
import Back.repositories.DevRepository;
import Back.repositories.TarefaRepository;
import Back.services.exceptions.ObjectNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private TarefaRepository repository;

    public Tarefa create(tarefaDTO DTO) {
        return repository.save(mapper.map(DTO, Tarefa.class));
    }

    public List<Tarefa> findAll() {
        return repository.findAll();
    }

    public Tarefa findById(Integer id) {
        Optional<Tarefa> obj = repository.findById(id);
        return obj.orElseThrow(
() -> new ObjectNotFoundException("Objeto não encontrado! ID: " +id)
        );
    }


    public Tarefa update(Integer id, tarefaDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Tarefa.class)
        );
    }


    public void delete(Integer id) {
        findById(id);
        repository.deleteById(id);
    }
}
