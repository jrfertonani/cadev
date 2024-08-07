package Back.domain;

import Back.domain.Enums.Categoria;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity     @Data
public class Dev extends Pessoas {
    private static final long serialVersionUID = 1L;

    private Categoria categoria;



}
