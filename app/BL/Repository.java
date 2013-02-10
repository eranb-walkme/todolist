package BL;

import java.util.*;

import play.db.ebean.*;
import play.db.ebean.Model.Finder;
import play.data.validation.Constraints.*;

import javax.persistence.*;

import models.Task;


public class Repository<T>
{
	private Finder<Long, T> _finder;
	
	//TODO: redundent
	public Repository(Class<T> type)
	{
		_finder = new Finder<>(Long.class, type);
	}
	
	public List<T> all()
	{
		return _finder.all();
	}
		
}