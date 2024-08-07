package Back.domain.DTO;

import Back.domain.Dev;
import Back.domain.Enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter     @Setter
@AllArgsConstructor
@NoArgsConstructor
public class tarefaDTO {

    private Integer id;

    private String title;
    private String description;

    private Status status;



}
