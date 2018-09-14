void Html::MoveReportFiles()    // CaVE TODO: Get this working (will it always run in ProjectOverviewGraphsDlgBase.cpp?)
{
  QString projectName;
  QString projectPath;
  
  projectName = QFileInfo(mProjectName).baseName();
  projectPath = QFileInfo(mProjectName).absoluteFilePath();
  
  char *copyFromPath = 0;
  stihomeBuildFile("conf/understand/dashboard/", &copyFromPath);
  QString copyFromPathString = QString(copyFromPath);
  
  QString outputDashboardFilePath = QString("%_html/").arg(projectPath);
  outputDashboardFilePath = QDir::toNativeSeparators(outputDashboardFilePath);
  
  QFile cssFrom(QString("%1reportCSS.css").arg(copyFromPathString));
  QFile cssTo(QString("%1/reportCSS.css").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  QFile jsFrom(QString("%1reportJS.js").arg(copyFromPathString));
  QFile jsTo(QString("%1/reportJS.js").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  QFile jQueryFrom(QString("%1jquery-3.3.1.min.js").arg(copyFromPathString));
  QFile jQueryTo(QString("%1/jquery-3.3.1.min.js").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  QFile tocDropFrom(QString("%1ToCdropdown.png").arg(copyFromPathString));
  QFile tocDropTo(QString("%1/ToCdropdown.png").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  QFile understandImageCropFrom(QString("%1understand-logo-crop.png").arg(copyFromPathString));
  QFile understandImageCropTo(QString("%1/understand-logo-crop.png").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  QFile understandIconFrom(QString("%1understand-icon.png").arg(copyFromPathString));
  QFile understandIconTo(QString("%1/understand-icon.png").arg(QFileInfo(outputDashboardFilePath).absolutePath()));
  
  if (cssTo.exists()) {
    cssTo.remove();
  }
  if (jsTo.exists()) {
    jsTo.remove();
  }
  if (jQueryTo.exists()) {
    jQueryTo.remove();
  }
  if (tocDropTo.exists()) {
    tocDropTo.remove();
  }
  if (understandImageCropTo.exists()) {
    understandImageCropTo.remove();
  }
  if (understandIconTo.exists()) {
    understandIconTo.remove();
  }
  
  cssFrom.copy(cssTo.fileName());
  jsFrom.copy(jsTo.fileName());
  jQueryFrom.copy(jQueryTo.fileName());
  tocDropFrom.copy(tocDropTo.fileName());
  understandImageCropFrom.copy(understandImageCropTo.fileName());
  understandIconFrom.copy(understandIconTo.fileName());
}