
Pod::Spec.new do |s|
  s.name         = "RNScreenControl"
  s.version      = "1.0.0"
  s.summary      = "RNScreenControl"
  s.description  = <<-DESC
                  RNScreenControl
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "contact@textile.io" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNScreenControl.git", :tag => "master" }
  s.source_files  = "RNScreenControl/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  