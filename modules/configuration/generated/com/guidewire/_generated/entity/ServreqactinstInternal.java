package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Servreqactinst.eti;Servreqactinst.eix;Servreqactinst.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ServreqactinstInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the ForeignEntity field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestInstruction getForeignEntity();
  
  
  public gw.pl.persistence.core.Key getForeignEntityID();
  
  
  /**
   * Gets the value of the Owner field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequest getOwner();
  
  
  public gw.pl.persistence.core.Key getOwnerID();
  
  
  /**
   * Sets the value of the ForeignEntity field.
   */
  public void setForeignEntity(entity.ServiceRequestInstruction value);
  
  
  public void setForeignEntityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(entity.ServiceRequest value);
  
  
  public void setOwnerID(gw.pl.persistence.core.Key value);
  
  
  
}