package hello.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import hello.model.Student;
import hello.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
/*for  avoid error Access-Control-Allow-Origin in angular
Cross-origin resource sharing (CORS)

*/
@Configuration
@RestController
@RequestMapping("/student")
public class StudentController{
/***************************************************************/
// @Autowired
// private AuthenticationManager authenticationManager;
    @Autowired
    private StudentRepository studentRepo;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Student>> getStudents() {
        return new ResponseEntity<>(studentRepo.findAll(), HttpStatus.OK);
    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable long id) {
        return  studentRepo.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Collection<Student>> deleteStudent(@PathVariable long id) {
        Student student = studentRepo.findOne(id);
        studentRepo.delete(id);

        return new ResponseEntity<>(studentRepo.findAll(), HttpStatus.OK);
    }



    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addStudent(@RequestBody Student student) {
        return new ResponseEntity<>(studentRepo.save(student), HttpStatus.CREATED);
    }
   /* @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateStudent(@RequestBody Student student) {
       // Student updatestudent = studentRepo.findOne(student.getId());

        studentRepo.findOne(student.getId()).setAge(student.getAge());
        studentRepo.findOne(student.getId()).setName(student.getName());

        return new ResponseEntity<>(studentRepo.findOne(student.getId()), HttpStatus.OK);
    }*/

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public @ResponseBody ResponseEntity<?>  updateStudent(@PathVariable("id") long id,
                                         @RequestBody @Valid Student student){
      /*  Student updatestudent = studentRepo.findOne(id);
        updatestudent.setAge(student.getAge());
        updatestudent.setName(student.getName());

        return new ResponseEntity<>(updatestudent , HttpStatus.OK);*/

        return new ResponseEntity<>(studentRepo.save(student), HttpStatus.OK);
    }


}
