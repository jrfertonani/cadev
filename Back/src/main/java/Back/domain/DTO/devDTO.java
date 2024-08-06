package Back.domain.DTO;

import Back.domain.Enums.Status;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter     @Setter
@AllArgsConstructor
@NoArgsConstructor
public class devDTO {

    private Integer id;
    private String name;
    private String email;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    protected LocalDateTime dataCadastro = LocalDateTime.now();

    private Status status;
}
