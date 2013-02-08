package controllers;

import java.util.List;

import play.libs.Json;
import play.mvc.*;
import models.Task;
import BL.Repository;
import play.mvc.Controller;
import com.google.gson.*;

public class JsonController extends Controller
{ 
	
	public static Result all()
	{		
		Repository<Task> repository = new Repository<Task>(Task.class);
		
		List<Task> tasks = repository.all();
		Gson gson = new Gson();
		return ok(Json.toJson(tasks));
	}
	
}
