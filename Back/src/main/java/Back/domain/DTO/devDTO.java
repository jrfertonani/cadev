package Back.domain.DTO;

import Back.domain.Enums.Categoria;
import Back.domain.Enums.Status;
import Back.domain.Tarefa;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter     @Setter
@AllArgsConstructor
@NoArgsConstructor
public class devDTO {

    private Integer id;
    private String name;
    private String email;

    private Categoria categoria;


}
