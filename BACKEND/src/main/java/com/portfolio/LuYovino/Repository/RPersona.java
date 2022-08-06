
package com.portfolio.LuYovino.Repository;
import com.portfolio.LuYovino.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
// hacemos que personaRepository se extienda de JpaRepository para poder utilizar sus metodos ctrl+click aparecen todos los metodos