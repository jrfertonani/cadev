package Back.services;

import Back.domain.DTO.devDTO;
import Back.domain.Dev;
import Back.repositories.DevRepository;
import Back.services.exceptions.ObjectNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DevService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DevRepository repository;


    public Dev create(devDTO DTO) {
        return repository.save(mapper.map(DTO, Dev.class));
    }

    public List<Dev> getAll() {
        return repository.findAll();
    }

    public Object findById(Integer id) {
        Optional<Dev> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado!  ID: " + id));
    }

    public Dev update(Integer id, devDTO DTO) {
        findById(id);

        return repository.save(mapper.map(DTO, Dev.class));
    }
    public void delete(Integer id) {
        repository.deleteById(id);
    }


}
